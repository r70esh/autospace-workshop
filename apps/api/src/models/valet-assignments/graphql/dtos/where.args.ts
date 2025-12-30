import { Field, InputType, PartialType ,Int} from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingRelationFilter } from 'src/models/bookings/graphql/dtos/where.args'
import { ValetRelationFilter } from 'src/models/valets/graphql/dtos/where.args'

@InputType()
export class ValetAssignmentWhereUniqueInput {
  @Field(() => Int)
  bookingId: number
}

// Step 1: Base fields (non-recursive)
@InputType()
export class ValetAssignmentWhereInputBase {
  @Field(() => IntFilter, { nullable: true })
  bookingId?: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => FloatFilter, { nullable: true })
  pickupLat?: FloatFilter

  @Field(() => FloatFilter, { nullable: true })
  pickupLng?: FloatFilter

  @Field(() => FloatFilter, { nullable: true })
  returnLat?: FloatFilter

  @Field(() => FloatFilter, { nullable: true })
  returnLng?: FloatFilter

  @Field(() => StringFilter, { nullable: true })
  pickupValetId?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  returnValetId?: StringFilter

  @Field(() => ValetRelationFilter, { nullable: true })
  PickupValet?: ValetRelationFilter

  @Field(() => ValetRelationFilter, { nullable: true })
  ReturnValet?: ValetRelationFilter

  @Field(() => BookingRelationFilter, { nullable: true })
  Booking?: BookingRelationFilter
}

// Step 2: Make base fields optional
@InputType()
export class ValetAssignmentWhereInputPartial extends PartialType(ValetAssignmentWhereInputBase) {}

// Step 3: Add recursive AND/OR/NOT
@InputType()
export class ValetAssignmentWhereInput extends ValetAssignmentWhereInputPartial {
  @Field(() => [ValetAssignmentWhereInput], { nullable: true })
  AND?: ValetAssignmentWhereInput[]

  @Field(() => [ValetAssignmentWhereInput], { nullable: true })
  OR?: ValetAssignmentWhereInput[]

  @Field(() => [ValetAssignmentWhereInput], { nullable: true })
  NOT?: ValetAssignmentWhereInput[]
}

// List relation filter
@InputType()
export class ValetAssignmentListRelationFilter {
  @Field(() => ValetAssignmentWhereInput, { nullable: true })
  every?: ValetAssignmentWhereInput

  @Field(() => ValetAssignmentWhereInput, { nullable: true })
  some?: ValetAssignmentWhereInput

  @Field(() => ValetAssignmentWhereInput, { nullable: true })
  none?: ValetAssignmentWhereInput
}

// Single relation filter
@InputType()
export class ValetAssignmentRelationFilter {
  @Field(() => ValetAssignmentWhereInput, { nullable: true })
  is?: ValetAssignmentWhereInput

  @Field(() => ValetAssignmentWhereInput, { nullable: true })
  isNot?: ValetAssignmentWhereInput
}
