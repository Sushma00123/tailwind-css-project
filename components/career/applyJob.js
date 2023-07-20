"use client"
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'


function ApplyJob() {
    const [formdata, setFormdata] = useState({
        name: '',
        email: '',
        phone: '',
        jobRole: '',
        coverLetter: '',
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formdata, 'data')
        console.log('welcome')
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormdata({
            ...formdata,
            [name]: value,
        });
    };
  

    return (
        <div className='bg-primaryBlack'>
            <div className='custom-container'>
                <div className='flex flex-col md:flex-row justify-between py-10'>
                    <div className='lg:max-w-sm max-w-xs my-auto'>
                        <h2 className='text-formbg text-4xl font-bold capitalize'>To become a part of our Growing Family</h2>
                        <p className='text-white mt-2'>Please share CV</p>
                    </div>
                    <div className='md:w-4/12 sm:w-6/12 sm:mt-0 mt-6'>
                        <form className="bg-primaryBlue px-3 py-6 rounded-3xl" onSubmit={handleSubmit}>
                            <h3 className='mb-2 capitalize text-sm text-primaryWhite font-bold'>Fill in your details</h3>
                            <div >
                                <Label className='text-primaryWhite text-xs'>Name*</Label>
                                <Input className=" h-12 bg-formbg rounded-lg mb-4 " type='text' name="name" value={formdata.name} onChange={handleChange}></Input>
                            </div>
                            <div >
                                <Label className='text-primaryWhite text-xs'>Email*</Label>
                                <Input className=" h-12  bg-formbg rounded-lg mb-4" type="email" name="email" value={formdata.email} onChange={handleChange}></Input>
                            </div>
                            <div >
                                <Label className='text-primaryWhite text-xs'>Phone*</Label>
                                <Input className=" h-12  bg-formbg rounded-md mb-4" type='phone' name="phone" value={formdata.phone} onChange={handleChange}></Input>
                            </div>
                            <div >
                                <Label className='text-primaryWhite text-xs'>Job Role</Label>
                                <Select 
                                    name="jobRole"
                                    value={formdata.jobRole} onChange={handleChange}
                                    >
                                    <SelectTrigger className="h-12 bg-formbg rounded-md mb-4">
                                        <SelectValue placeholder="Select Job" />
                                    </SelectTrigger>
                                    <SelectContent >
                                        <SelectGroup  >
                                            <SelectLabel>Fruits</SelectLabel>
                                            <SelectItem value="apple" >Apple</SelectItem>
                                            <SelectItem value="banana">Banana</SelectItem>
                                            <SelectItem value="blueberry">Blueberry</SelectItem>
                                            <SelectItem value="grapes">Grapes</SelectItem>
                                            <SelectItem value="pineapple">Pineapple</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div >
                                <Label className='text-primaryWhite text-xs'>Cover Letter</Label>
                                <Textarea className=" h-12  rounded-lg" name="coverLetter" value={formdata.coverLetter} onChange={handleChange} ></Textarea>
                            </div>
                            <div className='mt-4 flex gap-3 items-center'>
                                <Label className='text-primaryWhite'>Upload Resume*</Label>
                                {/* <Button variant='outline' className='rounded-3xl w-32 border-primaryWhite text-primaryWhite h-9 bg-primaryBlue hover:bg-none'>Upload</Button> */}
                                <Button variant='outline' className='rounded-3xl w-32 border-primaryWhite text-primaryWhite bg-primaryBlue h-9'>Upload</Button>

                            </div>
                            <div className='text-right mt-6'>
                                <Button variant='outline' className='rounded-3xl w-32 border-blue-800 text-blue-800 h-9 bg-primaryWhite'>Submit</Button>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyJob