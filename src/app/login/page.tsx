import { Container, Flex, Input, Image } from "@chakra-ui/react"

const Login = () => {
  return (
    <Container>
      <Flex
        gap="4"
        justify="center"
        marginTop={300}
        marginInline={"auto"}
        direction="column"
        columnGap={5}
        maxW={400}
      >
        <Flex marginInline={"auto"} justify="center">
          <Image
            src="https://bit.ly/naruto-sage"
            boxSize="150px"
            borderRadius="full"
            fit="cover"
            alt="Naruto Uzumaki"
            w={'fit-content'}
          />
        </Flex>
        <h1>Login</h1>
        <label>User</label>
        <Input placeholder="Outline" variant="outline" />

        <label>Password</label>
        <Input placeholder="Outline" variant="outline" type="password" />
      </Flex>
    </Container>
  )
}

export default Login
