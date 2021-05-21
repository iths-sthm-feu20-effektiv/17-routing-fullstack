import { CartItem } from '../../types/CartItem'

interface Props {
	items: CartItem[]
}

const Cart = ({ items }: Props) => (
	<div>
	<h1> Din kundvagn </h1>
	{ items.length === 0 ? 'Din kundvagn är tom.' : 'TODO: mappa alla items' }

	</div>
)

export default Cart
