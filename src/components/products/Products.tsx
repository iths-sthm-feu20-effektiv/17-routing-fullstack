import { useEffect, useState } from 'react'


const Products = () => {
	const [products, setProducts] = useState<null | string[]>(null)

	useEffect(() => {
		async function get() {
			const response = await fetch('/api/products', { method: 'GET' })
			const data: string[] = await response.json()
			// Använd "mountedRef" här
			setProducts(data)
			// OBS! Bättre att hämta datan i App-komponenten, eftersom den alltid är MOUNTED
		}
		get()
	}, [])


	return (
		<div>
			{products
				? products.map(product => (
					<div key={product}>
						Bild på produkt <br/>
						{product} <br/>
						<button> Köp! </button>
					</div>
				))
				: 'Hämtar produkter från API...'
			}
		</div>
	)
}

export default Products
