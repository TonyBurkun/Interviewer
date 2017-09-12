package utils;

import org.apache.log4j.Logger;
import org.json.simple.JSONObject;
import org.openqa.selenium.WebDriver;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class ListenerTest implements ITestListener {

    final static Logger logger = Logger.getLogger(ListenerTest.class);
    APIClient client = new APIClient("https://interviewer.testrail.net/");



    public void onTestStart(ITestResult iTestResult) {
        String testCaseName = iTestResult.getName();
        logger.info("TEST: " + testCaseName + " STARTED");

       String browserName = iTestResult.getTestContext().getCurrentXmlTest().getParameter("browserName");
       String implicitWaitInSeconds = iTestResult.getTestContext().getCurrentXmlTest().getParameter("implicitWaitInSeconds");
//
//        WebDriver driver = RemoteWebDriverFactory.createInstance(browserName);
//        RemoteDriverManager.setWebDriver(driver);
//        RemoteDriverManager.getDriver().manage().timeouts().implicitlyWait(Integer.parseInt(implicitWaitInSeconds), TimeUnit.SECONDS);

        // For slow internet and slow test suite, slower than rest of the tests
        String[] groups = iTestResult.getMethod().getGroups();
        for (String group : groups) {
            if (group.contains("slow")) {
                RemoteDriverManager.getDriver().manage().timeouts().implicitlyWait(Integer.parseInt(implicitWaitInSeconds) + 50, TimeUnit.SECONDS);
            }
        }
    }

    public void onTestSuccess(ITestResult iTestResult) {

        String testNGUsersParameter = iTestResult.getTestContext().getCurrentXmlTest().getParameter("myParam");
        String testCaseName = iTestResult.getName();

        logger.info("TEST: " + testCaseName + " PASSED");
    }

    public void onTestFailure(ITestResult iTestResult) {
        logger.error("TEST: " + iTestResult.getName() + " FAILED");
        logger.error(iTestResult.getThrowable().fillInStackTrace());


//        JSONObject body = new JSONObject();
//        body.put("status_id", "1");
//        try {
//           Object tr = client.sendGet("");
//           Object tc = client.sendGet("");
//            client.sendPost("add_result_for_case/" + tr +"/" + tc, body);
//        } catch (IOException e) {
//            e.printStackTrace();
//        } catch (APIException e) {
//            e.printStackTrace();
//        }
    }

    public void onTestSkipped(ITestResult iTestResult) {
        logger.info("TEST: " + iTestResult.getName() + " SKIPPED");
    }

    public void onTestFailedButWithinSuccessPercentage(ITestResult iTestResult) {

    }

    public void onStart(ITestContext iTestContext) {
        // Invoked after the test class is instantiated and before any configuration method is called.
    }

    public void onFinish(ITestContext iTestContext) {
        // Invoked after all the tests have run and all their Configuration methods have been called.
        WebDriver driver = RemoteDriverManager.getDriver();
        logger.error("===End of test run===");
        if (driver != null) {
            logger.info("Restoring implicit wait to default value");
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            logger.info("Closing browser window");
            RemoteDriverManager.closeDriver();
        }
    }
}