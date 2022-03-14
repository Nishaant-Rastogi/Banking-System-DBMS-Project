import Link from 'next/link';


const Login = () =>{
  return(
    <div>
      <Link href="/admin">
        <a>Home</a>
      </Link>
      <Link href="/user">
        <a>User</a>
      </Link>
    </div>
    )
}
export default Login;