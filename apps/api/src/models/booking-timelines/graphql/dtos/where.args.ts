import { Field, InputType, PartialType, ID } from '@nestjs/graphql'
import { $Enums, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { ManagerRelationFilter } from 'src/models/managers/graphql/dtos/where.args'
import { ValetRelationFilter } from 'src/models/valets/graphql/dtos/where.args'

@InputType()
export class BookingTimelineWhereUniqueInput {
  @Field(() => ID)
  id: number
}

// Step 1: Base fields (non-recursive)
@InputType()
export class BookingTimelineWhereInputBase {
  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  timestamp?: DateTimeFilter

  @Field(() => $Enums.BookingStatus, { nullable: true })
  status?: $Enums.BookingStatus

  @Field(() => IntFilter, { nullable: true })
  bookingId?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  valetId?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  managerId?: StringFilter

  @Field(() => BookingRelationFilter, { nullable: true })
  Booking?: BookingRelationFilter

  @Field(() => ValetRelationFilter, { nullable: true })
  Valet?: ValetRelationFilter

  @Field(() => ManagerRelationFilter, { nullable: true })
  Manager?: ManagerRelationFilter
}

// Step 2: Make base fields optional
@InputType()
export class BookingTimelineWhereInputPartial extends PartialType(BookingTimelineWhereInputBase) {}

// Step 3: Add recursive AND/OR/NOT
@InputType()
export class BookingTimelineWhereInput extends BookingTimelineWhereInputPartial {
  @Field(() => [BookingTimelineWhereInput], { nullable: true })
  AND?: BookingTimelineWhereInput[]

  @Field(() => [BookingTimelineWhereInput], { nullable: true })
  OR?: BookingTimelineWhereInput[]

  @Field(() => [BookingTimelineWhereInput], { nullable: true })
  NOT?: BookingTimelineWhereInput[]
}

// List relation filter
@InputType()
export class BookingTimelineListRelationFilter {
  @Field(() => BookingTimelineWhereInput, { nullable: true })
  every?: BookingTimelineWhereInput

  @Field(() => BookingTimelineWhereInput, { nullable: true })
  some?: BookingTimelineWhereInput

  @Field(() => BookingTimelineWhereInput, { nullable: true })
  none?: BookingTimelineWhereInput
}

// Single relation filter
@InputType()
export class BookingTimelineRelationFilter {
  @Field(() => BookingTimelineWhereInput, { nullable: true })
  is?: BookingTimelineWhereInput

  @Field(() => BookingTimelineWhereInput, { nullable: true })
  isNot?: BookingTimelineWhereInput
}
