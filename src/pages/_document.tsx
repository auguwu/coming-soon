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

import Document, { NextScript, Head, Html, Main, DocumentContext } from 'next/document';

export default class PolarboiProteccActDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initial = await Document.getInitialProps(ctx);
    return { ...initial };
  }

  render() {
    return <Html lang='en'>
      <Head>
        <link rel='shortcut icon' href='https://cdn.floofy.dev/images/trans.png' />
        <link rel='icon' href='https://cdn.floofy.dev/images/trans.png' />
        <meta charSet='UTF-8' />
        <meta name='description' content='Hey! This is in the works, come back soon for a result? :3 ☆*ヾ(-∀・*)*+☆' />
        <meta name='theme-color' content='#DAA2C6' />
        <meta property='og:description' content='Hey! This is in the works, come back soon for a result? :3 ☆*ヾ(-∀・*)*+☆' />
        <meta property='og:title' content='~ ✨ in the works ✨ ~' />
        <meta property='og:image' content='https://cdn.floofy.dev/images/August.png' />
        <meta property='og:type' content='website' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
  }
}
