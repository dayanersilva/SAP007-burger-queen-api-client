import { render, screen } from '@testing-library/react';
import ResultPrice from '../components/resultPrice';
// import Cart from '../components/cart';

const mockPrice = ['20'];

describe('ResultPrice Component', () => {
    it('as informações dos produtos devem estar visíveis', () => {
      render(<ResultPrice value={mockPrice} />);
  
      const cartArticle = screen.getAllByRole('article');
      cartArticle.map((article) => {
        return expect(article).toBeVisible();
      })
    });
})

// const mockCart = [{
//         id: '48',
//         name: 'Hambúrguer duplo',
//         price: '16',
//         flavor: 'frango',
//         complement: 'ovo',
// }]

// describe('Cart Component', () => {
//     it('as informações dos produtos devem estar visíveis', () => {
//       render(<Cart data={mockCart}/>);
  
//       const cartArticle = screen.getAllByRole('li');
//       cartArticle.map((li) => {
//         return expect(li).toBeVisible();
//       })
//     });
//   })