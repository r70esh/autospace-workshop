import { Field, InputType, PartialType, ID } from '@nestjs/graphql'
import { $Enums, BookingStatus, Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingTimelineListRelationFilter } from 'src/models/booking-timelines/graphql/dtos/where.args'
import { CustomerRelationFilter } from 'src/models/customers/graphql/dtos/where.args'
import { SlotRelationFilter } from 'src/models/slots/graphql/dtos/where.args'
import { ValetAssignmentRelationFilter } from 'src/models/valet-assignments/graphql/dtos/where.args'

@InputType()
export class BookingWhereUniqueInput {
  @Field(() => ID)
  id: number
}

@InputType()
export class EnumBookingStatusFilter {
  @Field(() => BookingStatus, { nullable: true })
  equals?: BookingStatus

  @Field(() => [BookingStatus], { nullable: true })
  in?: BookingStatus[]

  @Field(() => [BookingStatus], { nullable: true })
  notIn?: BookingStatus[]

  @Field(() => BookingStatus, { nullable: true })
  not?: BookingStatus
}

// Step 1: Base fields (non-recursive)
@InputType()
export class BookingWhereInputBase {
  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => FloatFilter, { nullable: true })
  pricePerHour?: FloatFilter

  @Field(() => FloatFilter, { nullable: true })
  totalPrice?: FloatFilter

  @Field(() => DateTimeFilter, { nullable: true })
  startTime?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  endTime?: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  vehicleNumber?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  passcode?: StringFilter

  @Field(() => EnumBookingStatusFilter, { nullable: true })
  status?: EnumBookingStatusFilter

  @Field(() => IntFilter, { nullable: true })
  slotId?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  customerId?: StringFilter

  @Field(() => ValetAssignmentRelationFilter, { nullable: true })
  ValetAssignment?: ValetAssignmentRelationFilter

  @Field(() => CustomerRelationFilter, { nullable: true })
  Customer?: CustomerRelationFilter

  @Field(() => SlotRelationFilter, { nullable: true })
  Slot?: SlotRelationFilter

  @Field(() => BookingTimelineListRelationFilter, { nullable: true })
  BookingTimeline?: BookingTimelineListRelationFilter
}

// Step 2: Make base fields optional
@InputType()
export class BookingWhereInputPartial extends PartialType(BookingWhereInputBase) {}

// Step 3: Add recursive AND/OR/NOT
@InputType()
export class BookingWhereInput extends BookingWhereInputPartial {
  @Field(() => [BookingWhereInput], { nullable: true })
  AND?: BookingWhereInput[]

  @Field(() => [BookingWhereInput], { nullable: true })
  OR?: BookingWhereInput[]

  @Field(() => [BookingWhereInput], { nullable: true })
  NOT?: BookingWhereInput[]
}

// List relation filter
@InputType()
export class BookingListRelationFilter {
  @Field(() => BookingWhereInput, { nullable: true })
  every?: BookingWhereInput

  @Field(() => BookingWhereInput, { nullable: true })
  some?: BookingWhereInput

  @Field(() => BookingWhereInput, { nullable: true })
  none?: BookingWhereInput
}

// Single relation filter
@InputType()
export class BookingRelationFilter {
  @Field(() => BookingWhereInput, { nullable: true })
  is?: BookingWhereInput

  @Field(() => BookingWhereInput, { nullable: true })
  isNot?: BookingWhereInput
}
