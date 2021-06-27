const Inventory = () => {
	return (
		
			<h1>

			<h1><b>Enter Inventory</b></h1>
			<form action="#" method="post" autocomplete="on">




				<label forHTML="identifyfood">Item Name</label>
				<input type="text" id="name" name="name" forHTML="identifyfood" />


				<label forHTML="quantity">Quantity of Servings</label>
				<input type="number" id="quantity" name="quantity" value="quant" min="0" required />



				<input type="submit" value="Submit" />
			</form>

		</>
	)
}