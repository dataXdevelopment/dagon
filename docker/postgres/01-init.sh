#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER"<<-EOSQL
    CREATE DATABASE redwood;
    CREATE DATABASE redwood_test;
    GRANT ALL PRIVILEGES ON DATABASE redwood TO postgres;
    GRANT ALL PRIVILEGES ON DATABASE redwood_test TO postgres;
EOSQL
