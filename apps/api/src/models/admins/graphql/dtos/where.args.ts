import { Field, InputType, PartialType, ID } from '@nestjs/graphql'
import { DateTimeFilter, StringFilter } from 'src/common/dtos/common.input'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'
import { VerificationListRelationFilter } from 'src/models/verifications/graphql/dtos/where.args'

@InputType()
export class AdminWhereUniqueInput {
  @Field(() => ID)
  uid: string
}

// Step 1: Base fields only (non-recursive)
@InputType()
export class AdminWhereInputBase {
  @Field(() => VerificationListRelationFilter, { nullable: true })
  Verifications?: VerificationListRelationFilter

  @Field(() => StringFilter, { nullable: true })
  uid?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => UserRelationFilter, { nullable: true })
  User?: UserRelationFilter
}

// Step 2: Make all base fields optional
@InputType()
export class AdminWhereInputPartial extends PartialType(AdminWhereInputBase) {}

// Step 3: Recursive input with AND/OR/NOT
@InputType()
export class AdminWhereInput extends AdminWhereInputPartial {
  @Field(() => [AdminWhereInput], { nullable: true })
  AND?: AdminWhereInput[]

  @Field(() => [AdminWhereInput], { nullable: true })
  OR?: AdminWhereInput[]

  @Field(() => [AdminWhereInput], { nullable: true })
  NOT?: AdminWhereInput[]
}

// List relation filter
@InputType()
export class AdminListRelationFilter {
  @Field(() => AdminWhereInput, { nullable: true })
  every?: AdminWhereInput

  @Field(() => AdminWhereInput, { nullable: true })
  some?: AdminWhereInput

  @Field(() => AdminWhereInput, { nullable: true })
  none?: AdminWhereInput
}

// Single relation filter
@InputType()
export class AdminRelationFilter {
  @Field(() => AdminWhereInput, { nullable: true })
  is?: AdminWhereInput

  @Field(() => AdminWhereInput, { nullable: true })
  isNot?: AdminWhereInput
}
