// import React from 'react'
// import { useRef, useState, useEffect } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { v4 as uuidv4 } from 'uuid';
// const Manager = () => {
//     const ref = useRef()
//     const passwordRef = useRef()
//     const [form, setform] = useState({ site: "", username: "", password: "" })
//     const [passwordArray, setPasswordArray] = useState([])



//     const getPassword = async () => {
//         let req = await fetch("http://localhost:3000/")
//         let passwords = await req.json()
//         console.log(passwords);
//         setPasswordArray(passwords)

//     }

//     useEffect(() => {
//         getPassword()
//     }, [])

//     const showPassword = () => {
//         passwordRef.current.type = "text"
//         if (ref.current.src === "https://cdn.lordicon.com/dicvhxpz.json") {
//             ref.current.src = "https://cdn.lordicon.com/kezeezyg.json"
//             passwordRef.current.type = "text"
//         } else {
//             ref.current.src = "https://cdn.lordicon.com/dicvhxpz.json"
//             passwordRef.current.type = "password"
//         }
//     }

//     const savePassword = async () => {
//         if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

//             // If any such id exists in the db, delete it 
//             await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) })

//             setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
//             await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })

//             // Otherwise clear the form and show toast
//             setform({ site: "", username: "", password: "" })
//             toast('Password saved!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });
//         }
//         else {
//             toast('Error: Password not saved!');
//         }

//     }

//      const deletePassword = async (id) => {
//         console.log("Deleting password with id ", id)
//         let c = confirm("Do you really want to delete this password?")
//         if (c) {
//             setPasswordArray(passwordArray.filter(item => item.id !== id))
            
//             await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })

//             toast('Password Deleted!', {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true, 
//                 draggable: true,
//                 progress: undefined,
//                 theme: "dark",
//             });
//         }

//     }
//     const editPassword = (id) => {
//         setform({ ...passwordArray.filter(i => i.id === id)[0], id: id })
//         setPasswordArray(passwordArray.filter(item => item.id !== id))
//     }


//     const handleChange = (e) => {
//         setform({ ...form, [e.target.name]: e.target.value })
//     }

//     const copytext = (text) => {
//         toast.success('Copied to clipboard', {
//             position: "top-center",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: false,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light",
//         });
//         navigator.clipboard.writeText(text)
//     }




//     return (
//         <>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={5000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick={false}
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//                 theme="light"
//                 transition="Bounce"
//             />
//             <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
//                 <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
//             </div>
//             <div className="md:mycontainer ">
//                 <h1 className='font-bold text-purple-600 text-2xl text-center'> <span className='text-purple-500'>&lt;</span>
//                     Raaz
//                     <span className='text-purple-500'>/&gt;</span></h1>
//                 <p className='text-purple-700 text-lg text-center'>Your own password manager</p>


//                 <div className="text-black flex flex-col p-4 gap-8">
//                     <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-purple-800 w-full p-4 py-1' type="text" name='site' id='site' />
//                     <div className="flex flex-col md:flex-row w-full justify-between gap-5">
//                         <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-purple-800 w-full p-4 py-1' type="text" name='username' id='username' />

//                         <div className="relative">
//                             <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-purple-800 w-full p-3 py-1' type="password" name='password' id='password' />
//                             <button className='ml-2 absolute' onClick={showPassword}>
//                                 <lord-icon
//                                     ref={ref}
//                                     src="https://cdn.lordicon.com/dicvhxpz.json"
//                                     trigger="hover"
//                                     stroke="bold"
//                                     colors="primary:#121331,secondary:#8930e8"
//                                 >
//                                 </lord-icon>
//                             </button>
//                         </div>
//                     </div>
//                     <div className='flex justify-center'>
//                         <button onClick={savePassword} className='flex justify-centre items-center bg-purple-400 rounded-full px-4 py-2 hover:bg-purple-500 text-purple-950 gap-2 border-2 border-purple-900'>
//                             <lord-icon

//                                 src="https://cdn.lordicon.com/sbnjyzil.json"
//                                 trigger="hover"
//                                 stroke="bold"
//                                 colors="primary:#121331,secondary:#8930e8"
//                             >
//                             </lord-icon>
//                             Save Password</button>
//                     </div>
//                 </div>

//                 <div className="passwords">
//                     <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
//                     {passwordArray.length === 0 && <div>No Passwords to show</div>}

//                     {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden">
//                         <thead className='bg-purple-500 text-white'>
//                             <tr>
//                                 <th className='py-2'>Site</th>
//                                 <th className='py-2'>Username</th>
//                                 <th className='py-2'>Password</th>
//                                 <th className='py-2'>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className='bg-purple-100 '>

//                             {passwordArray.map((item, index) => {
//                                 return <tr key={index}>
//                                     <td className=' text-center border-2 border-white py-2'>
//                                         <div className="copybtn flex justify-center items-center"> <a href={item.site} target='_blank'>{item.site}</a>
//                                             <div className='size-7 hover:cursor-pointer' onClick={() => { copytext(item.site) }}>
//                                                 <img style={{ width: "25px", height: "25px", padding: "1px", marginTop: "3px", marginLeft: "2px" }} src="/icons/content_paste_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" />
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className=' text-center  border-2 border-white py-2'>
//                                         <div className="copybtn flex justify-center items-center">
//                                             <span>{item.username}</span>
//                                             <div className='size-7 hover:cursor-pointer' onClick={() => { copytext(item.username) }}>
//                                                 <img style={{ width: "25px", height: "25px", padding: "1px", marginTop: "3px", marginLeft: "2px" }} src="/icons/content_paste_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" />
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className=' text-center  border-2 border-white py-2'>
//                                         <div className="copybtn flex justify-center items-center">
//                                             <span>{"*".repeat(item.password.length)}</span>
//                                             <div className='size-7 hover:cursor-pointer' onClick={() => { copytext(item.password) }}>
//                                                 <img style={{ width: "25px", height: "25px", padding: "1px", marginTop: "3px", marginLeft: "2px" }} src="/icons/content_paste_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="" />
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className=' text-center  border-2 border-white py-2'>
//                                         <span onClick={() => { deletePassword(item.id) }} className='hover:cursor-pointer'>
//                                             <lord-icon
//                                                 src="https://cdn.lordicon.com/hwjcdycb.json"
//                                                 trigger="morph"
//                                                 state="morph-trash-out"
//                                                 colors="primary:#121331,secondary:#a866ee"
//                                             >
//                                             </lord-icon>
//                                         </span>
//                                         <span onClick={() => { editPassword(item.id) }} className='hover:cursor-pointer'>
//                                             <lord-icon
//                                                 src="https://cdn.lordicon.com/fikcyfpp.json"
//                                                 trigger="hover"
//                                                 stroke="bold"
//                                                 colors="primary:#121331,secondary:#8930e8"
//                                             >
//                                             </lord-icon>
//                                         </span>
//                                     </td>
//                                 </tr>
//                             })}

//                         </tbody>
//                     </table>}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Manager
import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Shield, Eye, EyeOff, Copy, Trash2, Edit, Save, Lock, Globe } from 'lucide-react'

const Manager = () => {
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])
    const [showPassword, setShowPassword] = useState(false)
    const [copied, setCopied] = useState("")

    const getPassword = async () => {
        try {
            let req = await fetch("http://localhost:3000/")
            let passwords = await req.json()
            setPasswordArray(passwords)
        } catch (error) {
            console.log("Error fetching passwords:", error)
        }
    }

    useEffect(() => {
        getPassword()
    }, [])

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
        if (passwordRef.current) {
            passwordRef.current.type = showPassword ? "password" : "text"
        }
    }

    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
            try {
                // If editing, remove the old entry
                if (form.id) {
                    await fetch("http://localhost:3000/", { 
                        method: "DELETE", 
                        headers: { "Content-Type": "application/json" }, 
                        body: JSON.stringify({ id: form.id }) 
                    })
                }

                const newPassword = { ...form, id: Date.now().toString() }
                setPasswordArray([...passwordArray, newPassword])
                
                await fetch("http://localhost:3000/", { 
                    method: "POST", 
                    headers: { "Content-Type": "application/json" }, 
                    body: JSON.stringify(newPassword) 
                })

                setform({ site: "", username: "", password: "" })
                showToast("Password saved successfully!", "success")
            } catch (error) {
                showToast("Error saving password!", "error")
            }
        } else {
            showToast("All fields must be at least 3 characters long!", "error")
        }
    }

    const deletePassword = async (id) => {
        if (confirm("Are you sure you want to delete this password?")) {
            try {
                setPasswordArray(passwordArray.filter(item => item.id !== id))
                await fetch("http://localhost:3000/", { 
                    method: "DELETE", 
                    headers: { "Content-Type": "application/json" }, 
                    body: JSON.stringify({ id }) 
                })
                showToast("Password deleted!", "success")
            } catch (error) {
                showToast("Error deleting password!", "error")
            }
        }
    }

    const editPassword = (id) => {
        const passwordToEdit = passwordArray.find(item => item.id === id)
        if (passwordToEdit) {
            setform(passwordToEdit)
            setPasswordArray(passwordArray.filter(item => item.id !== id))
        }
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text)
        setCopied(type)
        showToast(`${type} copied to clipboard!`, "success")
        setTimeout(() => setCopied(""), 2000)
    }

    const showToast = (message, type) => {
        // Simple toast replacement - in real app you'd use a proper toast library
        const toast = document.createElement('div')
        toast.className = `fixed top-4 right-4 p-4 rounded-lg text-white z-50 transition-all duration-300 ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`
        toast.textContent = message
        document.body.appendChild(toast)
        setTimeout(() => {
            toast.remove()
        }, 3000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900/5 to-transparent"></div>
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>

            <div className="relative z-10 container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-4">
                        <Shield className="w-12 h-12 text-cyan-400 mr-4" />
                        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            NEXUS VAULT
                        </h1>
                    </div>
                    <p className="text-gray-300 text-xl">Next-Generation Password Management</p>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Password Form */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-8 shadow-2xl">
                        <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                            <Lock className="w-6 h-6 mr-3 text-cyan-400" />
                            {form.id ? 'Edit Password' : 'Add New Password'}
                        </h2>
                        
                        <div className="space-y-6">
                            <div className="relative">
                                <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    value={form.site}
                                    onChange={handleChange}
                                    placeholder="Website URL"
                                    className="w-full bg-black/20 border border-white/30 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                                    type="text"
                                    name="site"
                                    id="site"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <input
                                        value={form.username}
                                        onChange={handleChange}
                                        placeholder="Username"
                                        className="w-full bg-black/20 border border-white/30 rounded-xl px-4 py-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                                        type="text"
                                        name="username"
                                        id="username"
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        ref={passwordRef}
                                        value={form.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        className="w-full bg-black/20 border border-white/30 rounded-xl px-4 py-4 pr-12 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/50 transition-all duration-300"
                                        type="password"
                                        name="password"
                                        id="password"
                                    />
                                    <button
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                                    >
                                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    onClick={savePassword}
                                    className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
                                >
                                    <Save className="w-5 h-5" />
                                    <span>{form.id ? 'Update Password' : 'Save Password'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Passwords Table */}
                <div className="max-w-6xl mx-auto">
                    <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-8 shadow-2xl">
                        <h2 className="text-2xl font-semibold text-white mb-6">Your Secure Vault</h2>
                        
                        {passwordArray.length === 0 ? (
                            <div className="text-center py-12">
                                <Shield className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                                <p className="text-gray-400 text-lg">Your vault is empty. Add your first password to get started.</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-white/20">
                                            <th className="text-left py-4 px-6 text-cyan-400 font-semibold">Website</th>
                                            <th className="text-left py-4 px-6 text-cyan-400 font-semibold">Username</th>
                                            <th className="text-left py-4 px-6 text-cyan-400 font-semibold">Password</th>
                                            <th className="text-center py-4 px-6 text-cyan-400 font-semibold">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {passwordArray.map((item, index) => (
                                            <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors duration-300">
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center space-x-3">
                                                        <a 
                                                            href={item.site} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="text-white hover:text-cyan-400 transition-colors duration-300 truncate max-w-xs"
                                                        >
                                                            {item.site}
                                                        </a>
                                                        <button
                                                            onClick={() => copyToClipboard(item.site, 'website')}
                                                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-1"
                                                        >
                                                            <Copy className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center space-x-3">
                                                        <span className="text-white truncate max-w-xs">{item.username}</span>
                                                        <button
                                                            onClick={() => copyToClipboard(item.username, 'username')}
                                                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-1"
                                                        >
                                                            <Copy className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center space-x-3">
                                                        <span className="text-white font-mono">{"●".repeat(item.password.length)}</span>
                                                        <button
                                                            onClick={() => copyToClipboard(item.password, 'password')}
                                                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 p-1"
                                                        >
                                                            <Copy className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6">
                                                    <div className="flex justify-center space-x-2">
                                                        <button
                                                            onClick={() => editPassword(item.id)}
                                                            className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-400/10"
                                                        >
                                                            <Edit className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={() => deletePassword(item.id)}
                                                            className="text-gray-400 hover:text-red-400 transition-colors duration-300 p-2 rounded-lg hover:bg-red-400/10"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager
