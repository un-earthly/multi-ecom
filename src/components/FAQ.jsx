
'use client';

import { Accordion } from 'flowbite-react';
import ContentLayout from './ContentLayout';

function FAQ() {
    return (
        <ContentLayout>
            <div className="pb-10">
                <h2 className="text-lg my-5 font-semibold text-[#FF9800]">TRENDING NOW</h2>
                <div className='bg-[#D9D9D9] p-10 '>
                    <div className="w-10/12 mx-auto">
                        <Accordion className='space-y-5'>
                            <Accordion.Panel className='space-y-0'>
                                <Accordion.Title className='bg-[#E9E9E9]'>lorem ipsume faq ipsum lorem moren nonre</Accordion.Title>
                                <Accordion.Content className='bg-[#EEEEEE] '>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, quas vel sint commodi repudiandae consequuntur voluptatum laborum blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium , eaque rerum! odit fugiat iusto fuga praesentium , eaque  odit fugiat iusto fuga praesentium , eaque  odit fugiat iusto fuga praesentium , eaque  odit fugiat iusto fuga praesentium , eaque  odit fugiat iusto fuga praesentium , eaque


                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='bg-[#E9E9E9]'>lorem ipsume Lorem ipsum dolor sit amet. ipsum lorem moren nonre</Accordion.Title>
                                <Accordion.Content className='bg-[#EEEEEE]'>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, quas vel sint commodi repudiandae consequuntur voluptatum laborum blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium , eaque rerum! odit fugiat iusto fuga praesentium , eaque  odit fugiat iusto fuga praesentium , eaque  odit fugiat iusto fuga praesentium , eaque  odit fugiat iusto fuga praesentium , eaque  odit fugiat iusto fuga praesentium , eaque


                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title className='bg-[#E9E9E9]'>lorem ipsume faq ipsum lorem moren  Lorem, ipsum dolor.</Accordion.Title>
                                <Accordion.Content className='bg-[#EEEEEE]'>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, quas vel sint commodi repudiandae consequuntur voluptatum laborum blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium , eaque rerum! odit fugiat iusto fuga praesentium , eaque  odit fugiat iusto fuga praesentium , eaque  odit fugiat iusto fuga praesentium , eaque  odit fugiat iusto fuga praesentium , eaque  odit fugiat iusto fuga praesentium , eaque

                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                </div>
            </div>

        </ContentLayout>
    );
}



export default FAQ;