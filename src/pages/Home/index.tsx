import { Github } from '@components/Github';
import { Logo } from '@components/Logo';
import { Quote } from '@components/Quote';
import { Tagline } from '@components/Tagline';
import { ThemeToggle } from '@components/ThemeToggle';
import { Title } from '@components/Title';
import { Center, Container } from '@mantine/core';

export function Home() {
  return (
    <Center style={{ height: '100vh' }}>
      <Container>
        <ThemeToggle />
        <Title />
        <Logo />
        <Tagline />
        <Github />
        <Quote />
      </Container>
    </Center>
  );
}
