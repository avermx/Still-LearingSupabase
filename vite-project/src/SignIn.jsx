import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { UserAuth } from "./AuthContext";
import {
    Card,
    Text,
    TextField,
    Button,
    Flex,
    Heading,
} from '@radix-ui/themes';
import { Columns } from "lucide-react";
const SignIn = () => {

    // const navigate = useNavigate()
    // const [showPassword, setShowPassword] = useState(false);
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const { session, signInUser, Error } = UserAuth()

    // console.log(session)

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const result = await signInUser(email, password);
    //         if (result.success) {
    //             navigate('/dashboard');
    //         }
    //     } catch (err) {
    //         console.log('error ', err)

    //     }

    // }

    return (
        <div className=" h-screen flex items-center justify-center px-4">
            <Card className="w-[30%] h-[70%]">
                <Flex direction='column' gap='4' align='center' className="flex content-center">
                    <Heading align='center'> Sign In</Heading>
                    <Text size='4' align='center' color='gray'>
                        Welcome Back. Please enter your credentials.
                    </Text>

                    <form className="flex flex-col w-[80%] gap-5 " >
                        <TextField.Root placeholder="Email" >
                            <TextField.Slot>

                            </TextField.Slot>
                        </TextField.Root>
                        <TextField.Root placeholder="Password" >
                            <TextField.Slot>

                            </TextField.Slot>
                        </TextField.Root>
                    </form>
                </Flex>
            </Card>
        </div>
    )
}



export default SignIn