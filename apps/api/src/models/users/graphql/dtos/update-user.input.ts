import { InputType, PartialType , Field} from '@nestjs/graphql'
import { User } from '../entity/user.entity'

@InputType()
export class UpdateUserInput extends PartialType(User) {
  @Field(() => String)  // GraphQL type explicitly defined
  uid: User['uid'];     // TypeScript still knows this is the same type as User.uid
}