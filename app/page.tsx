/*import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Harini</h1>
    </main>
  );
}
*/
const number1 = document.getElementById("num1") as HTMLInputElement
const printButton = document.getElementById("printBtn") as HTMLButtonElement
const printValue = document.getElementById("enteredNumber") as HTMLOutputElement

function printEnteredValue(): void{
    const numb1 = parseFloat(number1.value);
    printValue.textContent = numb1.toString();

}

printButton.addEventListener("click", printEnteredValue);