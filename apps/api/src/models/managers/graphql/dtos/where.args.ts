import { Field, InputType, Int, PartialType } from '@nestjs/graphql'
import { Prisma } from '@prisma/client'
import {
  DateTimeFilter,
  IntFilter,
  StringFilter,
} from 'src/common/dtos/common.input'
import { BookingTimelineListRelationFilter } from 'src/models/booking-timelines/graphql/dtos/where.args'
import { CompanyRelationFilter } from 'src/models/companies/graphql/dtos/where.args'
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args'

@InputType()
export class ManagerWhereUniqueInput {
  @Field()
  uid: string
}

@InputType()
class ManagerWhereInputBase {
  @Field(() => UserRelationFilter, { nullable: true })
  User?: UserRelationFilter

  @Field(() => StringFilter, { nullable: true })
  uid?: StringFilter

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter

  @Field(() => StringFilter, { nullable: true })
  displayName?: StringFilter

  @Field(() => IntFilter, { nullable: true })
  companyId?: IntFilter

  @Field(() => CompanyRelationFilter, { nullable: true })
  Company?: CompanyRelationFilter

  @Field(() => BookingTimelineListRelationFilter, { nullable: true })
  BookingTimeline?: BookingTimelineListRelationFilter
}

@InputType('ManagerWhereInput')
export class ManagerWhereInput extends PartialType(ManagerWhereInputBase) {
  @Field(() => [ManagerWhereInput], { nullable: true })
  AND?: ManagerWhereInput[]

  @Field(() => [ManagerWhereInput], { nullable: true })
  OR?: ManagerWhereInput[]

  @Field(() => [ManagerWhereInput], { nullable: true })
  NOT?: ManagerWhereInput[]
}

@InputType()
export class ManagerListRelationFilter {
  @Field(() => ManagerWhereInput, { nullable: true })
  every?: ManagerWhereInput

  @Field(() => ManagerWhereInput, { nullable: true })
  some?: ManagerWhereInput

  @Field(() => ManagerWhereInput, { nullable: true })
  none?: ManagerWhereInput
}

@InputType()
export class ManagerRelationFilter {
  @Field(() => ManagerWhereInput, { nullable: true })
  is?: ManagerWhereInput

  @Field(() => ManagerWhereInput, { nullable: true })
  isNot?: ManagerWhereInput
}
