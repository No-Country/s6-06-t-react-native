import { styles } from "./styles.js";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavMenu from "../../../../components/home/header/NavMenu";
import InfoComunity from "../../../../components/home/header/InfoComunity.jsx";
import NoVacantes from "../../../../components/NoVacantes.jsx";

import backEnd from "../../../../../assets/jobs/back_end.png";
import frontEnd from "../../../../../assets/jobs/front_end.png";
import todos from "../../../../../assets/jobs/todos.png";
import uxUi from "../../../../../assets/jobs/ux_ui.png";

import { usePostJobs } from "../../../../hooks/usePostJob";
import ScrollViewPost from "../../../../components/home/ScrollViewPostJob/ScrollViewPost.jsx";

import { Cambiador } from "../../../../redux/actions/actions.js";
const JobsChannel = () => {
  let dataUser = {
    Channel: "Requirimientos - Jobs",
  };
  const state = useSelector((state) => state.login.user);
  const variable = useSelector((state) => state.login.variable);
  const dispatch = useDispatch();

  const handler = () => {
    dispatch(Cambiador(!variable));
  };

  const [Posts, setPosts] = useState([]);

  let { getPosts } = usePostJobs();
  if (!state) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  useEffect(() => {
    (async () => {
      await getPosts(`/job-offer/all`, state.token, setPosts);
    })();
  }, []);


  const postFront = Posts.filter((e) => e.type === "front").length
    ? Posts.filter((e) => e.type === "front")
    : [];
  const postBack =
    Posts.filter((e) => e.type === "back").length > 0
      ? Posts.filter((e) => e.type === "back")
      : [];

  const postUXUI =
    Posts.filter((e) => e.type === "uxui").length > 0
      ? Posts.filter((e) => e.type === "uxui")
      : [];

  let [activador, setActivador] = useState([true, false, false, false]);
  return (
    <SafeAreaView style={styles.homeContain}>
      <View style={styles.HeaderContain}>
        <NavMenu />
        <Text style={styles.saludo}>Hola, {state.fullName}!</Text>
        <View style={{ position: "relative", right: 18 }}>
          <InfoComunity Channel={dataUser.Channel} />
        </View>
      </View>

      <View>
        <Text
          style={{
            marginLeft: 14,
            marginBottom: 20,
            fontSize: 15,
            fontWeight: "500",
          }}
        >
          Mostrar:
        </Text>

        <ScrollView horizontal={true}>
          <TouchableOpacity
            style={
              activador[0]
                ? styles.button
                : [styles.button, { backgroundColor: "#8C8EDD" }]
            }
            onPress={() =>
              setActivador(
                (activador) => (activador = [true, false, false, false])
              )
            }
          >
            <Image source={todos} />
            <Text style={styles.buttonText}>Todos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              activador[1]
                ? styles.button
                : [styles.button, { backgroundColor: "#8C8EDD" }]
            }
            onPress={() =>
              setActivador(
                (activador) => (activador = [false, true, false, false])
              )
            }
          >
            <Image source={frontEnd} />
            <Text style={styles.buttonText}>Front End</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              activador[2]
                ? styles.button
                : [styles.button, { backgroundColor: "#8C8EDD" }]
            }
            onPress={() =>
              setActivador(
                (activador) => (activador = [false, false, true, false])
              )
            }
          >
            <Image source={backEnd} />
            <Text style={styles.buttonText}>Back End</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              activador[3]
                ? styles.button
                : [styles.button, { backgroundColor: "#8C8EDD" }]
            }
            onPress={() =>
              setActivador(
                (activador) => (activador = [false, false, false, true])
              )
            }
          >
            <Image source={uxUi} />
            <Text style={styles.buttonText}>UX UI</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {activador[0] && (
        <View style={styles.ScrollContain}>
          <ScrollViewPost
            post={Posts}
            token={state.token}
            getPost={getPosts}
            load={true}
            setList={setPosts}
          />
        </View>
      )}
      {activador[1] &&
        (postFront.length > 0 ? (
          <View style={styles.ScrollContain}>
            <ScrollViewPost
              post={postFront}
              token={state.token}
              getPost={getPosts}
              load={false}
              setList={setPosts}
            />
          </View>
        ) : (
          <NoVacantes rol="back-end" styles={styles} />
        ))}

      {activador[2] &&
        (postBack.length > 0 ? (
          <ScrollViewPost
            post={postBack}
            token={state.token}
            getPost={getPosts}
            load={true}
            setList={setPosts}
          />
        ) : (
          <NoVacantes rol="back-end" styles={styles} />
        ))}
      {activador[3] &&
        (postUXUI.length > 0 ? (
          <ScrollViewPost
            post={postUXUI}
            token={state.token}
            getPost={getPosts}
            load={true}
            setList={setPosts}
          />
        ) : (
          <NoVacantes rol="UX-UI" styles={styles} />
        ))}
    </SafeAreaView>
  );
};

export default JobsChannel;
