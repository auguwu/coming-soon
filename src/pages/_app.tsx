/**
 * ~ ✨ in the works ✨ ~
 * Copyright (c) 2021-present Noel <cutie@floofy.dev>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import type { AppProps } from 'next/app';
import Head from 'next/head';

import '../styles/globals.scss';

export default function PolarboiApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>~ ✨ in the works :3 ✨ ~</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <Component {...pageProps} />
  </>;
}
