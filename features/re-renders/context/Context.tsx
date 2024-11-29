import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useWarnReRender } from "@/helpers/useWarnReRender";
import { faker } from "@faker-js/faker";

type SchoolContextType = {
  school: string;
  students: string[];
  addStudent: () => void;
  removeStudent: () => void;
};

const SchoolContext = createContext<SchoolContextType>({
  school: "",
  students: [],
  addStudent: () => {},
  removeStudent: () => {},
});

const SchoolContextProvider = ({ children }: PropsWithChildren) => {
  const school = useRef<string>("Konoha");
  const [students, setStudents] = useState<string[]>([
    "Naruto",
    "Sasuke",
    "Sakura",
  ]);

  const addStudent = useCallback(() => {
    setStudents([...students, faker.person.firstName()]);
  }, []);

  const removeStudent = useCallback(() => {
    setStudents(students.slice(0, students.length - 1));
  }, []);

  const values = useMemo(
    () => ({
      school: school.current,
      students,
      addStudent,
      removeStudent,
    }),
    [students, addStudent, removeStudent],
  );

  return (
    <SchoolContext.Provider value={values}>{children}</SchoolContext.Provider>
  );
};

const Students = () => {
  useWarnReRender("Students");
  const { students, addStudent, removeStudent } = useContext(SchoolContext);

  return (
    <View>
      {students.map((student) => (
        <View key={student}>
          <Text>- {student}</Text>
        </View>
      ))}

      <Button title={"Add student"} onPress={addStudent} />
      <Button title={"Remove student"} onPress={removeStudent} />
    </View>
  );
};

const School = () => {
  useWarnReRender("School");
  const { school } = useContext(SchoolContext);

  return <Text style={styles.title}>{school}</Text>;
};

export const Context = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.guidelines}>
        This exercise has some re-renders issues but there's another kind of
        issue, can you find it?
      </Text>
      <SchoolContextProvider>
        <School />
        <Students />
      </SchoolContextProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  guidelines: {
    marginBottom: 16,
    backgroundColor: "rgb(110,185,225)",
    color: "white",
    fontWeight: "bold",
    padding: 8,
    borderRadius: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
