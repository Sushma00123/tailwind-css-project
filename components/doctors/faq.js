import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faq = [
    {
        question: 'Does Apex Hospital in Jaipur accept health insurance?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        question: 'What are the visiting hours for patients at Apex Hospital in Jaipur?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
        question: 'Does Apex Hospital in Jaipur have specialized facilities for senior citizens?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
]

function Faq() {

    return (
        <div className='bg-primaryBlack'>
            <div className='custom-container py-10'>
                <h1 className='text-primaryYellow font-bold text-3xl'>FAQ’s</h1>

                <Accordion type="single" collapsible className="w-full">
                    {
                        faq.map((item, i) => (
                            <AccordionItem value={`item-${i}`} className='border-none' key={i}>
                                <AccordionTrigger className='hover:no-underline text-primaryWhite sm:text-base text-lg text-start' >{item?.question}</AccordionTrigger>
                                <AccordionContent className='text-primaryGrey sm:text-sm text-xs'>
                                    {item?.ans}
                                </AccordionContent>
                            </AccordionItem>

                        ))
                    }
                </Accordion>
            </div>
        </div>
    )
}

export default Faq