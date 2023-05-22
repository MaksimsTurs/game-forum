//Interfaces imports
import { FC } from 'react';

//Components imports
import CreateThemeForm from './components/CreateThemeForm';

const CreateThemeContainer: FC = () => {
  return(
    <div style={{ margin: '1rem 0rem' }}>
      <CreateThemeForm/>
    </div>
  )
}

export default CreateThemeContainer