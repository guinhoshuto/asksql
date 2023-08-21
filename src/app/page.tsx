'use client'

import logo from '../assets/logo.svg'
import Image from 'next/image'
import Editor from 'react-simple-code-editor'

import Prism, { highlight, languages } from 'prismjs'

import 'prismjs/components/prism-sql'
import 'prismjs/themes/prism-coy.css'
import {Trash2} from 'lucide-react'
import { useState } from 'react'

import { useCompletion } from 'ai/react'

export default function Home() {
  const [code, setCode] = useState('')
  // const [result, setResult] = useState('')

  const { completion, handleSubmit, input, handleInputChange} = useCompletion({
    api: '/api/completion',
    body: { code },
  })

  const result = completion

  return (
    <div className='max-w-[430px] mx-auto pt-12 pb-4'>
      <header className='flex justify-between w-full p-8'>
        <Image src={logo} alt="logo" />
        <button type='button'>
          <Trash2 className="h-8 w-8 text-white/80" strokeWidth={0.8} />
        </button> 
      </header>
      <form onSubmit={handleSubmit} className='py-8 w-full flex flex-col text-foam'>
        <label className='text-lg font-light' htmlFor='schema'>
          Cole seu Código SQL aqui:
        </label>
        <Editor 
          value={code}
          textareaId='schema'
          onValueChange={code => setCode(code)}
          highlight={code => highlight(code, languages.sql, 'sql')}
          padding={16}
          className='h-32 my-4 font-mono bg-[#151A2A] focus-within:ring-1 focus-within:ring-lime-600 border border-[#323842] rounded-md' 
          textareaClassName='outline-none '
          />

        <label className='text-xl font-light' htmlFor='question'>
          Faça uma pergunta sobre o código:
        </label>
        <textarea 
          className='my-4 bg-[#151A2A] border border-[#323842] rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-lime-600' 
          value={input}
          onChange={handleInputChange}
          name="question" 
          id="question" />

        <button 
          type="submit" 
          className='text-pistachio flex items-center justify-center rounded-lg border border-pistachio h-14 gap-3'
        >
          <span className='text-xl'>✨</span><span>Perguntar à inteligência artificial</span>
        </button>
      </form>
      <div className='mt-6 w-full flex flex-col'>
        <span className='text-xl text-foam font-light'>Resposta:</span>
        <Editor 
          value={result}
          readOnly
          onValueChange={() => {}}
          highlight={code => highlight(code, languages.sql, 'sql')}
          padding={16}
          className='h-32 my-4 font-mono bg-transparent border border-[#323842] rounded-md text-white' 
          textareaClassName='outline-none '
          />
      </div>
    </div> 
  )
}
