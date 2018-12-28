import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { StyledShopPage } from '../components/styles/PageStyles';
import NotFound from '../components/NotFound';
import PageTitle from '../components/PageTitle';
import ProductsList from '../components/ProductsList';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import { capWord, getPageTitleProps } from '../lib/utilFns';
import { orderByList } from '../config';
import { user } from '../lib/dummyData';
import { SHOP_PRODUCTS_QUERY, PAGINATION_QUERY } from '../graphql';


function getShopProps(pageQuery = {}) {
  const variables = { ...pageQuery };
  variables.online = true;

  if (variables.name && variables.name === user.name) {
    delete variables.online;
  }

  const show = parseFloat(pageQuery.show) || 1;
  variables.first = show;
  delete variables.show;

  const page = parseFloat(pageQuery.page) || 1;
  delete variables.page;
  variables.skip = (page * show - show) || 0;

  const orderBy = pageQuery.orderBy || 'newest';
  variables.orderBy = orderByList[orderBy];

  return { variables, show, page, orderBy };
}

const ShopPage = ({ query }) => {
  const { variables, show, page, orderBy } = getShopProps(query);
  const { pageLabel, titles } = getPageTitleProps(user, query);
  return (
    <StyledShopPage>
      <PageTitle
        page={pageLabel}
        titles={titles}
      />

      <Query query={SHOP_PRODUCTS_QUERY} variables={variables}>
        {({ data: shopData, error: shopError, loading: shopLoading }) => (
          <Query query={PAGINATION_QUERY} variables={variables}>
            {({ data: paginData, error: paginError, loading: paginLoading }) => {
              if (shopLoading || paginLoading) return (<p>Loading...</p>);
              const notFound = { message: '' };
              const products = !!shopData ? shopData.products : [];
              const count = !!paginData ? paginData.productsConnection.aggregate.count : 0;
              if ((!!products && !products.length) || !count) notFound.status = 204;
              if ((typeof products === 'undefined') || (!!paginData && typeof paginData.productsConnection === 'undefined')) notFound.status = 404;
              if (shopError || paginError) {
                notFound.status = 400;
                notFound.message = shopError ? shopError.message : paginError.message.replace('GraphQL error: ', '');
              };
              return (
                <div className="shop-pg-content">
                  <Filter
                    pageQuery={query}
                    products={products}
                  />

                  <div className="shop-pg-lst">
                    <Pagination
                      pageQuery={query}
                      currentPage={page}
                      currentShow={show}
                      results={products.length}
                      count={count}
                      currentOrderBy={orderBy}
                      disabled={!count}
                    />

                    {(!!notFound.status || !products.length) ? (
                      <NotFound status={notFound.status} message={notFound.message} />
                    ) : (
                      <ProductsList
                        products={products}
                        editView={!variables.online}
                      />
                    )}

                    <Pagination
                      pageQuery={query}
                      currentPage={page}
                      currentShow={show}
                      results={products.length}
                      count={count}
                      currentOrderBy={orderBy}
                      disabled={!count}
                    />
                  </div>
                </div>
              );
            }}
          </Query>
        )}
      </Query>
    </StyledShopPage>
  );
};

ShopPage.propTypes = {
  query: PropTypes.object.isRequired
};


export default ShopPage;
