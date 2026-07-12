import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  Res,
} from '@nestjs/common'
import StripeService from './stripe.service'
import { BookingsService } from '../bookings/graphql/bookings.service'
import { CreateStripeDto } from './dto/create-stripe-session.dto'
import { CreateBookingInput } from '../bookings/graphql/dtos/create-booking.input'
import { Response } from 'express'

@Controller('stripe')
export class StripeController {
  constructor(
    private readonly stripeService: StripeService,
    private readonly bookingService: BookingsService,
  ) {}

  @Get()
  helloStripe() {
    return 'Hello Stripe'
  }

  @Post()
  async create(@Body() createStripeDto: CreateStripeDto) {
    // Check if totalPriceObj is all zeros
    const total = Object.values(createStripeDto.totalPriceObj || {}).reduce(
      (sum, price) => sum + price,
      0,
    )

    if (total <= 0) {
      // Testing / free booking mode: skip Stripe
      const bookingInput: CreateBookingInput = JSON.parse(
        JSON.stringify(createStripeDto.bookingData),
      )
      const newBooking = await this.bookingService.create(bookingInput)
      return {
        sessionId: null,
        message: 'Free booking created (testing mode).',
        booking: newBooking,
      }
    }

    // Normal flow: call Stripe
    return this.stripeService.createStripeSession(createStripeDto)
  }

  @Get('success')
  async handleStripeSuccess(
    @Query('session_id') sessionId: string,
    @Res() res: Response,
  ) {
    if (!sessionId) {
      throw new BadRequestException('Session id missing.')
    }

    const session = await this.stripeService.stripe.checkout.sessions.retrieve(
      sessionId,
    )

    const { uid, bookingData } = session.metadata

    const bookingInput: CreateBookingInput = JSON.parse(bookingData)
    const newBooking = await this.bookingService.create(bookingInput)
    res.redirect(process.env.BOOKINGS_REDIRECT_URL)
  }
}
