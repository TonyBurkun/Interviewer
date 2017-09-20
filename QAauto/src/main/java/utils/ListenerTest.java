package utils;

import org.apache.log4j.Logger;
import org.json.simple.JSONObject;
import org.openqa.selenium.WebDriver;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestNGMethod;
import org.testng.ITestResult;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.util.concurrent.TimeUnit;
public class ListenerTest implements ITestListener {

    final static Logger logger = Logger.getLogger(ListenerTest.class);
    APIClient client = new APIClient("https://interviewer1.testrail.net/");

    WebDriver driver;

    public void onTestStart(ITestResult iTestResult) {
        client.setUser("oksana.gorbachenko.2009@gmail.com");
        client.setPassword("123456QWERTy");

        String browserName = iTestResult.getTestContext().getCurrentXmlTest().getParameter("browserName");
        String testCaseName = iTestResult.getName();
        logger.info("TEST: " + testCaseName + " STARTED"+ " ON BROWSER "+ browserName);

     //  String implicitWaitInSeconds = iTestResult.getTestContext().getCurrentXmlTest().getParameter("implicitWaitInSeconds");
     //  driver.manage().timeouts().implicitlyWait(Integer.parseInt(implicitWaitInSeconds), TimeUnit.SECONDS);

    //    WebDriver driver = RemoteWebDriverFactory.createInstance(browserName);
    //    RemoteDriverManager.setWebDriver(driver);

        // For slow internet and slow test suite, slower than rest of the tests
//        String[] groups = iTestResult.getMethod().getGroups();
//        for (String group : groups) {
//            if (group.contains("slow")) {
//                driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS); }
//        }
    }

    public void onTestSuccess(ITestResult iTestResult) {
        String testCaseName = iTestResult.getName();
        logger.info("TEST: " + testCaseName + " PASSED");

        ITestNGMethod method = iTestResult.getMethod();

        Class obj = method.getRealClass();

        Annotation annotation = null;
        Annotation annotationRunID =null;

        try {
            annotation = obj.getDeclaredMethod(method.getMethodName()).getAnnotation(TestCase.class);
            annotationRunID = obj.getDeclaredMethod(method.getMethodName()).getAnnotation(TestRun.class);

        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        }
        TestCase testerInfo = (TestCase) annotation;
        String testCaseId = testerInfo.id();

        TestRun testerRunInfo = (TestRun) annotationRunID;
        String testRunId = testerRunInfo.id();


        JSONObject body = new JSONObject();
        body.put("status_id", "1");
        try {
            client.sendPost("add_result_for_case/" + testRunId + "/" + testCaseId, body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
    }
    public void onTestFailure(ITestResult iTestResult) {

        String testCaseName = iTestResult.getName();
        logger.info("TEST: " + testCaseName + " FAILED");

        ITestNGMethod method = iTestResult.getMethod();

        Class obj = method.getRealClass();
        Annotation annotation = null;
        Annotation annotationRunID =null;

        try {
            annotation = obj.getDeclaredMethod(method.getMethodName()).getAnnotation(TestCase.class);
            annotationRunID = obj.getDeclaredMethod(method.getMethodName()).getAnnotation(TestRun.class);

        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        }
        TestCase testerInfo = (TestCase) annotation;
        String testCaseId = testerInfo.id();

        TestRun testerRunInfo = (TestRun) annotationRunID;
        String testRunId = testerRunInfo.id();


        JSONObject body = new JSONObject();
        body.put("status_id", "5");
        try {
            client.sendPost("add_result_for_case/" + testRunId + "/" + testCaseId, body);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (APIException e) {
            e.printStackTrace();
        }
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


        logger.error("===End of test run===");
        if (driver != null) {
            logger.info("Restoring implicit wait to default value");
            driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            logger.info("Closing browser window");
           driver.quit();
        }
    }
}