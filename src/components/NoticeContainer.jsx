import React from 'react'
import { Stack } from '@mui/material'
function NoticeContainer({heading,content,publishDate}) {
  return (
    <div className='border rounded-xl p-6 shadow-lg '>
        <Stack direction='row' gap='2'>
            <h2 className='me-auto font-medium font-semibold text-xl'>{heading}</h2>
            <p className='font-medium text-gray-700 '>{publishDate}</p>
        </Stack>
        <div className='mt-4'>
            {content}
        </div>

    </div>
  )
}

export default NoticeContainer
