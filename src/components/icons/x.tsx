import type { ComponentProps } from 'react'

export function X(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="currentColor"
      {...props}
    >
      <path d="M53.2407 62.8526L62.8526 53.2407C64.0242 52.0691 64.0242 50.1696 62.8526 48.9981L45.8546 32.0001L62.8526 15.0021C64.0242 13.8305 64.0242 11.931 62.8526 10.7594L53.2407 1.14748C52.0691 -0.0240943 50.1696 -0.0240927 48.9981 1.14748L32.0001 18.1455L15.0021 1.14748C13.8305 -0.0240945 11.931 -0.0240945 10.7594 1.14748L1.14748 10.7594C-0.0240945 11.931 -0.0240945 13.8305 1.14748 15.0021L18.1455 32.0001L1.14748 48.9981C-0.0240933 50.1696 -0.0240924 52.0691 1.14748 53.2407L10.7594 62.8526C11.931 64.0242 13.8305 64.0242 15.0021 62.8526L32.0001 45.8546L48.9981 62.8526C50.1696 64.0242 52.0691 64.0242 53.2407 62.8526Z" />
    </svg>
  )
}
