import { Footer } from '../../components/footer';
import { Logo } from '../../components/logo';
import { Container } from '../../components/container';
import { Menu } from '../../components/menu';

type TemplateMainProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: TemplateMainProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
