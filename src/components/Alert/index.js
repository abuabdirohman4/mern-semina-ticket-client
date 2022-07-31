import Alert from "react-bootstrap/Alert";

// function SAlert({message, type}) {
//   return (
//     <>
//       {[
//         'primary',
//         'secondary',
//         'success',
//         'danger',
//         'warning',
//         'info',
//         'light',
//         'dark',
//       ].map((variant) => (
//         <Alert key={variant} variant={type} fade={false}>
//           This is a {variant} alert—check it out!
//         </Alert>
//       ))}
//     </>
//   );
// }

function SAlert({ message, type }) {
  return <Alert type={type}>{message}</Alert>
}

export default SAlert;
