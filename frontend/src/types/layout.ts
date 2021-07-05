import { NextPage } from 'next';

import MainLayout from 'src/layout/main';

type PageWithLayoutType = NextPage & { layout: typeof MainLayout };

export default PageWithLayoutType;
