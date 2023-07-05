import { useAppSelector } from "../redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { Tab } from "../types/tab";
import { setActiveTab, setTabs } from "../redux/slices/tabSlice";

const Aside = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tabs: Tab[] = useAppSelector((state) => state.tabReducer.tabs);
  const handleClick = (index: number) => {
    if (tabs?.length) {
      // check if tabs already have the tab that is being clicked
      const tabExists = tabs?.find((tab) => tab.tabName === `Event ${index}`);
      if (!tabExists) {
        dispatch(
          setTabs([
            ...tabs,
            {
              id: `tab-${index + 1}`,
              tabName: `Event ${index}`,
              tabContent: getContent(index),
            },
          ])
        );
      }
    } else {
      dispatch(
        setTabs([
          {
            id: `tab-${index + 1}`,
            tabName: `Event ${index}`,
            tabContent: getContent(index),
          },
        ])
      );
    }
    dispatch(
      setActiveTab({
        id: `tab-${index + 1}`,
        tabName: `Event ${index}`,
        tabContent: getContent(index),
      })
    );
  };
  return (
    <aside className="w-max p-4 border-r h-screen overflow-y-auto whitespace-nowrap min-w-fit">
      <h2 className="w-max mb-2">Event Viewer</h2>
      <ul className="flex flex-col gap-4 list-none">
        {Array.from({ length: 10 }, (_, i) => (
          <li
            key={i}
            onClick={() => handleClick(i + 1)}
            className="cursor-pointer text-lg"
          >
            Event {i + 1}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;

const getContent = (index: number) => {
  return `Event ${index} content, Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptas atque, officiis et sint nesciunt culpa reprehenderit dolores provident modi placeat distinctio excepturi sequi? Pariatur aliquam recusandae illum voluptate dolor similique nostrum sit fuga, repudiandae quia iusto facilis voluptatibus accusamus quasi tempora sint at aspernatur in distinctio porro soluta dolorem officia dolores. Dolorem, exercitationem facilis modi at quaerat cupiditate rem ad laborum nostrum, itaque sapiente voluptates, minima ut facere. Nemo et neque facilis rerum molestias! Sequi, temporibus suscipit officiis accusantium quia dolorem incidunt voluptatum magnam excepturi ipsam itaque accusamus sit quaerat minus placeat veniam doloremque necessitatibus tempore repellendus magni libero. Quaerat autem aut amet quia ipsam magni culpa, aliquam dolorum perferendis. Beatae libero rerum laboriosam vel modi quod est sed ullam rem sint placeat ipsam necessitatibus minus, numquam vero aspernatur laudantium laborum minima saepe inventore sequi repellat excepturi animi. Tempora, a soluta voluptate rem nam possimus deserunt temporibus quibusdam iusto officiis dolorum mollitia, at libero unde porro nihil quasi iure? Adipisci molestias, consequatur nesciunt saepe ex aspernatur fugit dolore minima sunt. Excepturi facere iusto quo aliquid, obcaecati minus adipisci molestiae sapiente nemo fugit et in quam ad modi amet vel ullam. Vel autem dolorum velit doloribus modi, deleniti nesciunt quaerat perspiciatis quis suscipit at incidunt nemo, impedit possimus tempora ea eaque, soluta id quisquam non neque! Nihil quaerat aliquam cumque similique velit dignissimos. Ducimus quas, tenetur ratione molestias cum impedit maxime omnis, ut culpa optio facere facilis expedita distinctio. Similique dolorum explicabo autem at sapiente reprehenderit consequuntur accusamus ea praesentium temporibus assumenda eius earum delectus veniam corrupti sint asperiores quis excepturi quaerat expedita, molestias aut cupiditate maxime in. Ab, consequatur eum. Doloremque reprehenderit, consectetur provident tenetur ratione repellat? Et, obcaecati eligendi minima quia ut non vitae optio laudantium illo ipsum tenetur corrupti tempore dolores error rem iure quibusdam. Fugit, repudiandae tempore. Esse alias illo impedit earum placeat, deleniti itaque ipsum doloremque. Atque sequi aliquid non laboriosam sint, quis blanditiis adipisci architecto vel ab dolor. Possimus, explicabo rerum. Numquam, rerum necessitatibus recusandae ipsum placeat eum atque. A incidunt quia esse voluptas natus? Nisi culpa reiciendis delectus voluptates praesentium, debitis rerum non neque autem saepe doloremque provident ducimus numquam, amet veniam nihil eligendi dolore et fugit repellat incidunt hic officiis harum! Id corporis error deserunt, veniam consequuntur nobis dolorem. Exercitationem optio obcaecati, facilis corporis dignissimos omnis ducimus. Facilis iusto nisi omnis, incidunt natus consequuntur? Dolorum nihil alias qui harum, perspiciatis fugit repellat voluptas, corporis eveniet nostrum, similique exercitationem quas numquam maxime voluptatem vitae corrupti necessitatibus? Autem itaque qui consequatur cum, nisi nemo, reiciendis ullam eius dicta pariatur consectetur, dolore iusto nesciunt ad recusandae? Placeat eaque sapiente rerum quasi, recusandae fugit eum facilis dolore officiis? Aspernatur repellat illo corrupti adipisci! Quidem eaque enim, ratione sit sequi blanditiis eligendi est officia ex aperiam tempore et omnis voluptatem impedit? Esse perspiciatis veniam itaque qui, ipsa aspernatur ea blanditiis quod, quaerat optio doloribus eos quas numquam? Aliquam tempore nesciunt ad neque excepturi eius, perferendis suscipit, laborum repudiandae porro voluptatem, ipsum adipisci atque! Fuga dicta aperiam autem?`;
};
