import { connect } from 'react-redux';
import categoriesList from '../../../generated/categories';
import { push } from 'react-router-redux';
import Categories from './Categories';


const mapStateToProps = () => ({
  categories: categoriesList,
});

const mapDispatchToProps = {
  onClick: (category) => push(`/category/${category}`, { category }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
