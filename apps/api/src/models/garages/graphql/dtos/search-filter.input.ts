import { InputType, ObjectType, PickType ,Field,Int} from '@nestjs/graphql'
import { FindManyGarageArgs } from './find.args'
import { Slot } from 'src/models/slots/graphql/entity/slot.entity'
import { GarageWhereInput } from './where.args'
import { GarageOrderByWithRelationInput} from './order-by.args'
@InputType()
export class DateFilterInput {
  @Field()
  start: string

  @Field()
  end: string
}

@InputType()
export class GarageFilter {
  @Field(() => GarageWhereInput, { nullable: true })
  where?: GarageWhereInput

  @Field(() => [GarageOrderByWithRelationInput], { nullable: true })
  orderBy?: GarageOrderByWithRelationInput[]

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => Int, { nullable: true })
  take?: number
}


@ObjectType()
export class MinimalSlotGroupBy extends PickType(Slot, [
  'type',
  'pricePerHour',
]) {
  count: number
}
