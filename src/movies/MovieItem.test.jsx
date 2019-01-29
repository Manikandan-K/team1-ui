import {shallow} from 'enzyme';
import MovieItem from './MovieItem';
import { ExpansionPanelActions } from '@material-ui/core';

describe("Movie Item tests",()=>{

    const props={
        movie:{
            name:'Kabali',
            experiances:'Doolby Digital',
            slug:'Kabali'
        }
    };
    
    it("should render shansphot correctly",()=>{
        const sanpshot= shallow(<MovieItem movie={props.movie} />);
        
        expect(sanpshot).toMathSnapshot();
    });
});