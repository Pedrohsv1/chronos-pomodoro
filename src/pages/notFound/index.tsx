import { Container } from '../../components/container';
import { MainTemplate } from '../../templates/mainTemplate';

export default function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </Container>
    </MainTemplate>
  );
}
