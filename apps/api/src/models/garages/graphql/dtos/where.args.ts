import { Field, InputType, PartialType, Int } from '@nestjs/graphql'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
  StringListFilter,
} from 'src/common/dtos/common.input'
import { AddressRelationFilter } from 'src/models/addresses/graphql/dtos/where.args'
import { CompanyRelationFilter } from 'src/models/companies/graphql/dtos/where.args'
import { ReviewListRelationFilter } from 'src/models/reviews/graphql/dtos/where.args'
import { SlotListRelationFilter } from 'src/models/slots/graphql/dtos/where.args'
import { VerificationRelationFilter } from 'src/models/verifications/graphql/dtos/where.args'

@InputType()
export class GarageWhereUniqueInput {
  @Field(() => Int)
  id: number
}

@InputType()
class GarageWhereInputBase {
  @Field(() => IntFilter, { nullable: true })
  id?: IntFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  displayName?: StringFilter

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter

  @Field(() => StringListFilter, { nullable: true })
  images?: StringListFilter

  @Field(() => IntFilter, { nullable: true })
  companyId?: IntFilter

  @Field(() => CompanyRelationFilter, { nullable: true })
  Company?: CompanyRelationFilter

  @Field(() => AddressRelationFilter, { nullable: true })
  Address?: AddressRelationFilter

  @Field(() => VerificationRelationFilter, { nullable: true })
  Verification?: VerificationRelationFilter

  @Field(() => ReviewListRelationFilter, { nullable: true })
  Reviews?: ReviewListRelationFilter

  @Field(() => SlotListRelationFilter, { nullable: true })
  Slots?: SlotListRelationFilter
}

@InputType('GarageWhereInput')
export class GarageWhereInput extends PartialType(GarageWhereInputBase) {
  @Field(() => [GarageWhereInput], { nullable: true })
  AND?: GarageWhereInput[]

  @Field(() => [GarageWhereInput], { nullable: true })
  OR?: GarageWhereInput[]

  @Field(() => [GarageWhereInput], { nullable: true })
  NOT?: GarageWhereInput[]
}

@InputType()
export class GarageListRelationFilter {
  @Field(() => GarageWhereInput, { nullable: true })
  every?: GarageWhereInput

  @Field(() => GarageWhereInput, { nullable: true })
  some?: GarageWhereInput

  @Field(() => GarageWhereInput, { nullable: true })
  none?: GarageWhereInput
}

@InputType()
export class GarageRelationFilter {
  @Field(() => GarageWhereInput, { nullable: true })
  is?: GarageWhereInput

  @Field(() => GarageWhereInput, { nullable: true })
  isNot?: GarageWhereInput
}
