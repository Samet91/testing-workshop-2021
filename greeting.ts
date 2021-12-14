export default function greeting(name = "stranger") {
  const choachName = ["Lara", "Marwin", "Phil", "Jerry"];
  if (choachName.includes(name)) return "Hello, coach!";
  return `Hello, ${name}!`;
}
