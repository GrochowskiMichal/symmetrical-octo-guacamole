import Link from '@/components/Link'
import Image from 'next/image'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation } from 'react-rough-notation'
import NewsletterForm from '@/components/NewsletterForm'
import ViewCounter from '@/components/ViewCounter'
import CommandPalette from '@/components/CommandPalette'
import React, { useState } from 'react';
const MAX_DISPLAY = 3


export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  const togglePalette = () => {
    setIsPaletteOpen(!isPaletteOpen);
  };
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="mb-12 flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Hi, I am{' '}
              <span className="text-primary-color-500 dark:text-primary-color-dark-400">Michał</span>
            </h1>
            <h2 className="prose pt-5 text-2xl text-gray-600 dark:text-gray-300">
            Welcome and salute, Esteemed Visitor.
            </h2>
            <h2 className="prose pt-5 text-lg text-gray-600 dark:text-gray-300">
              This is {siteMetadata.description}.<br/> I am a Junior Frontend Developer, IT Project Manager and technology enthusiast.<br/> 
              With passion for all kinds of computer topics and love for Linux & customization all of the development environment.
              <br/>I always enjoy trying out different projects and tinkering with new ideas.
             <br/> During my leisure hours, I like to indulge in various activities that bring me joy and enrich my knowledge.
             <br/><br/>This is a pice of my space regarding my cogitations & ruminations.
            </h2><br/><br/>
            <RoughNotation
              type="underline"
              show={true}
              color="#587294"
              animationDelay={800}
              animationDuration={1200}
              className='text-3xl'
            >
              Bon voyage!
     </RoughNotation>
            <p className="hidden pt-10 text-xl leading-7 text-slate-600 dark:text-slate-300 md:block">
              <div className="mt-2 text-slate-600 dark:text-slate-400">
                <div className="my-2 grid items-start gap-8 pr-72">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r  from-indigo-300 to-indigo-600 opacity-60 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-ceter space-x-5">
                        <span className="pr-6 pl-2 text-gray-900 dark:text-gray-100">
                          Press {' '}
                          <Image 
                            src="/metakey_windows.svg" 
                            style={{ marginTop: '2px'}}
                            width={18} 
                            height={18} 
                            alt="Windows metakey icon"
                            
                            
                          /> 
                          {' '} + K {' '} or {' '}
                         <Image 
                         src="/metakey_mac.svg" 
                         style={{ marginTop: '3px' }}
                         width={14} 
                         height={14} 
                         alt="Mac metakey icon"
                         
                         />
                          {' '} + K 
                        </span>
                      </span>
                      <span className="pl-6 text-primary-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                      to start
                      </span>
                    </span>
                </div>
              </div>
                
              </div>
            </p>
            
          </div>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-400 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/projects">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-10 -rotate-6 text-emerald-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                        <span className="pr-12 text-gray-900 dark:text-gray-100">Handful of<br/> endeavors </span>
                      </span>
                      <span className="pl-6 text-emerald-600 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Projects
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-indigo-400 to-fuchsia-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/journey">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-10 -rotate-6 text-fuchsia-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span className="pr-14 text-gray-900 dark:text-gray-100">My life<br/>scenerio</span>
                      </span>
                      <span className="pl-6 text-fuchsia-600 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                        Timeline
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r  from-indigo-400 to-yellow-400 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="/MichałGrochowski_cv.pdf">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-10 -rotate-6 text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                        <span className="pr-10 text-gray-900 dark:text-gray-100">
                          Formal<br/> documents
                        </span>
                      </span>
                      <span className="pl-6 text-yellow-400 transition duration-200 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                      Résumé
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="flex pb-6 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest
        </h2>
        <hr className="border-gray-200 dark:border-gray-700" />
        <ul>
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link
                href={`/blog/${slug}`}
                key={slug}
                className="group flex bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <li className="py-6">
                  <article>
                    <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date)}</time>
                          {' • '}
                          <ViewCounter className="mx-1" slug={slug} />
                          views
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-4">
                        <div className="space-y-1">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                              >
                                {title}
                              </Link>
                            </h2>
                          </div>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                          <div className="prose max-w-none pt-5 text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-5 text-lg font-normal leading-6">
          <Link
            href="/blog"
            className=" special-underline-new text-primary-500 hover:text-gray-100 hover:no-underline dark:text-primary-500 hover:dark:text-gray-100"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">{/* <NewsletterForm /> */}</div>
      )}
    </>
  )
}
