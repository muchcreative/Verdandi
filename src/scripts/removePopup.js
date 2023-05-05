export default function closeForm() {
  return (
    <>
      <script>
        function closeForm() {
          // i think you might have to validate here
          // what does the html alone version do?
          const pwdForm = document.getElementById("pwd-form");
          const bgBlock = document.getElementById('bg-block');

          pwdForm.style.display = "none";
          bgBlock.style.display = "none";
        }   
      </script>
    </>
  )
}