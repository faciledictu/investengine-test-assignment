import iconFunds from '@/assets/card-funds.png';
import iconMarkets from '@/assets/card-markets.png';
import iconPortfolios from '@/assets/card-portfolios.png';
import { Card, Row } from '@/components';
import './App.scss';

function App() {
  return (
    <div className="container">
      <Row>
        <Card as="button" icon={iconMarkets} onClick={() => alert('Message')}>
          <Card.Heading>Follow leading global markets</Card.Heading>
          <Card.Body>
            Popular markets such as the S&P 500, the MSCI World of the FTSE 100
          </Card.Body>
        </Card>
        <Card as="a" variant="pink" icon={iconFunds} href="#">
          <Card.Heading>Earn 5.12% Money market funds</Card.Heading>
          <Card.Body>
            Low-risk, flexible, easy-to-use funds, average interest rate 5.12%
          </Card.Body>
        </Card>
      </Row>

      <Card variant="withStripe" icon={iconPortfolios}>
        <Card.Heading>Portfolios built for you</Card.Heading>
        <Card.Body>
          Fill in our simple questionaire, and our investment managers will
          biuld and manage a low-cost portfolio that suits you
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
