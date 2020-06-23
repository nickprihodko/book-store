"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      `
      DROP TRIGGER IF EXISTS rates_tr_au ON public.rates;
      DROP FUNCTION IF EXISTS rates_tr_au_fn;
      CREATE FUNCTION rates_tr_au_fn (
      )
      RETURNS trigger AS
      $body$
      DECLARE
        total_rate FLOAT;
      BEGIN
        SELECT round(cast(sum(rate)/count(*) as numeric), 1) INTO total_rate FROM rates WHERE "bookId" = new."bookId";
        UPDATE books SET rate = total_rate WHERE id = new."bookId";

        RETURN new;
      END;
      $body$
      LANGUAGE 'plpgsql'
      VOLATILE
      CALLED ON NULL INPUT
      SECURITY INVOKER;

      CREATE TRIGGER rates_tr_au
        AFTER UPDATE
        ON public.rates

      FOR EACH ROW
        EXECUTE PROCEDURE rates_tr_au_fn();
      `
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
      DROP TRIGGER rates_tr_au ON public.rates;
      DROP FUNCTION IF EXISTS rates_tr_au_fn;
    `);
  },
};
