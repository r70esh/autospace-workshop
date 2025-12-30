import { Field, InputType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { CustomerRelationFilter } from 'src/models/customers/graphql/dtos/where.args'
import { GarageRelationFilter } from 'src/models/garages/graphql/dtos/where.args'

@InputType()
export class ReviewWhereUniqueInput {
  @Field(() => Number)
  id: number
}

// Step 1: Base fields (non-recursive)
@InputType()
export class ReviewWhereInputBase {
  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => IntFilter, { nullable: true })
  rating?: IntFilter

  @Field(() => StringFilter, { nullable: true })
  comment?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  customerId?: StringFilter

  @Field(() => IntFilter, { nullable: true })
  garageId?: IntFilter

  @Field(() => CustomerRelationFilter, { nullable: true })
  Customer?: CustomerRelationFilter

  @Field(() => GarageRelationFilter, { nullable: true })
  Garage?: GarageRelationFilter
}

// Step 2: Make base fields optional
import { PartialType } from '@nestjs/graphql'

@InputType()
export class ReviewWhereInputPartial extends PartialType(ReviewWhereInputBase) {}

// Step 3: Add recursive AND/OR/NOT
@InputType()
export class ReviewWhereInput extends ReviewWhereInputPartial {
  @Field(() => [ReviewWhereInput], { nullable: true })
  AND?: ReviewWhereInput[]

  @Field(() => [ReviewWhereInput], { nullable: true })
  OR?: ReviewWhereInput[]

  @Field(() => [ReviewWhereInput], { nullable: true })
  NOT?: ReviewWhereInput[]
}

// List relation filter
@InputType()
export class ReviewListRelationFilter {
  @Field(() => ReviewWhereInput, { nullable: true })
  every?: ReviewWhereInput

  @Field(() => ReviewWhereInput, { nullable: true })
  some?: ReviewWhereInput

  @Field(() => ReviewWhereInput, { nullable: true })
  none?: ReviewWhereInput
}

// Single relation filter
@InputType()
export class ReviewRelationFilter {
  @Field(() => ReviewWhereInput, { nullable: true })
  is?: ReviewWhereInput

  @Field(() => ReviewWhereInput, { nullable: true })
  isNot?: ReviewWhereInput
}
