import { styled } from 'styled-components/native';
import { SafeAreaView, StatusBar } from "react-native";

export const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: #f3f0f0;
  ${StatusBar.currentHeight && `margin-top: 0`}
`;