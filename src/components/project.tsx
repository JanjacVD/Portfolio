import {
  FaLaravel,
  FaReact,
  FaAppStoreIos,
  FaGooglePlay,
} from "react-icons/fa";

const Project = ({
  children,
  appStore,
  link,
  playStore,
}: React.PropsWithChildren<{
  link?: string;
  appStore?: string;
  playStore?: string;
}>) => {
  return (
    <div>
      <div className="max-w-full aspect-auto relative w-[400px] h-[600px] bg-foreground rounded-[40px] flex flex-col items-center justify-between py-4">
        <div className="w-[60px] h-[10px] bg-background rounded-full"></div>
        <div className="w-[90%] h-[80%] bg-background rounded-[20px]">
          {children}
        </div>
        <div className="w-[40px] h-[40px] bg-background rounded-full"></div>
      </div>
      <div className="flex flex-row items-center gap-x-4 py-4">
        <p className="text-3xl">Technologies used:</p>
        <FaLaravel className="text-4xl" />
        <FaReact className="text-4xl" />
      </div>
      <div className="text-center">
        {link && (
          <a className="text-2xl" href={link} rel="noreferrer" target="_blank">
            Check it out here
          </a>
        )}
        {(appStore || playStore) && (
          <div className="flex items-center text-4xl justify-center gap-x-8">
            {appStore && (
              <a href={appStore} rel="noreferrer" target="_blank">
                <FaAppStoreIos />
              </a>
            )}
            {playStore && (
              <a href={playStore} rel="noreferrer" target="_blank">
                <FaGooglePlay />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Project;
