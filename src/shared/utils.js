import { faker } from "@faker-js/faker";

export function createRandomPost() {
  console.log(faker.hacker);

  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}
