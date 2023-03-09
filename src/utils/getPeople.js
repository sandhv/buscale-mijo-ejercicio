import { faker } from '@faker-js/faker';

const getOneUser = ()=>({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    amount: faker.finance.amount(),
})

export default ()=>Array.from({length: 100}, getOneUser)
