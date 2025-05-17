import inspect
import logging


def get_logger(name=inspect.stack()[1].filename):
    logger = logging.getLogger(name)
    return logger
