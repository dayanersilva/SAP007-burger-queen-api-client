import { render, screen } from '@testing-library/react';
import ResultPrice from '../components/resultPrice';
import Cart from '../components/cart';

const mockPrice = ['20'];

describe('ResultPrice Component', () => {
    it('as informações dos produtos devem estar visíveis', () => {
      render(<ResultPrice value={mockPrice} />);
  
      const resultArticle = screen.getAllByRole('article');
      resultArticle.map((article) => {
        return expect(article).toBeVisible();
      })
    });
})

describe('Cart Component', () => {
    it('deve ter a classe deleteItem inicialmente', async () => {
      render(<Cart />);
      const cartItem = await screen.findAllByRole('button');
      cartItem.map((button) => {
        return expect(button).toHaveClass('deleteItem');
      })
    })
  })