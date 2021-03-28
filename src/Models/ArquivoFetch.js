export const drinksAle = async () => {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const dados = await response.json();
  return dados;
}