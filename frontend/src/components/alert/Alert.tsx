import Link from 'next/link';

type AlertProps = {
  preview: boolean;
};

export default function Alert({ preview }: AlertProps) {
  return (
    <>
      {preview ? (
        <div className="bg-accent-7 border-accent-7 text-black">
          <div className="py-2 text-center text-sm">
            <>
              This page is a preview.{' '}
              <Link href="/api/exit-preview" passHref>
                <a className="underline hover:text-cyan duration-200 transition-colors">
                  Click here
                </a>
              </Link>{' '}
              to exit preview mode.
            </>
          </div>
        </div>
      ) : (
        <></>
      )}
      )
    </>
  );
}
